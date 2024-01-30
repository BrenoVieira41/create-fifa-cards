import puppeteer from 'puppeteer';
import { template } from './template';

interface Values {
  vel: string;
  fin: string;
  pas: string;
  dib: string;
  def: string;
  fis: string;
}

const positions = [
  'GK',
  'RB',
  'CB',
  'LB',
  'CDM',
  'CM',
  'CAM',
  'RM',
  'RW',
  'LM',
  'LW',
  'ST',
  'CF',
];

class CardService {
  private readonly atributes: Values;
  private readonly name: string;
  private readonly position: string;
  private readonly total: number;

  constructor(name: string, data: Values, position: string) {
    try {
      const nameRegex = /^[\p{L}\s]+$/u;
      if (!name || (name.length > 150 || name.length < 3)) throw new Error('Nome Inválido');
      if (!nameRegex.test(name)) throw new Error('Nome Inválido');

      if (!Object.values(data).every(this.validateNumbers))
        throw new Error('Todos os campos devem conter apenas números.');

      Object.keys(data).forEach(val => {
        const value = data[val];

        if (Number(value) > 99) {
          throw new Error(`Valor maximo de atributo = 99`);
        }

        data[val] = (Number(value) < 10) ? String(value).padStart(2, '0') : String(value);
      });

      if (!positions.includes(position.toUpperCase()))
        throw new Error('Posição não encontrada');

      const valuesNumber = Object.values(data).map(it => Number(it));
      this.total = valuesNumber.reduce((acc, numero) => acc + numero, 0);

      this.atributes = data;
      this.name = name;
      this.position = position;

      this.createCard()

    } catch (error) {
      console.error(error.message);
      throw error.message;
    }
  }

  private createCard() {
    const count = Math.floor((this.total / (99 * 6)) * 100);
    let card = 'https://raw.githubusercontent.com/BrenoVieira41/imagens-fifa/main/bronze.png'
    if (count >= 65) card = 'https://raw.githubusercontent.com/BrenoVieira41/imagens-fifa/main/silver.png';
    if (count >= 75) card = 'https://raw.githubusercontent.com/BrenoVieira41/imagens-fifa/main/gold.png';

    return template(
      this.name,
      this.position,
      this.atributes.vel,
      this.atributes.fin,
      this.atributes.pas,
      this.atributes.dib,
      this.atributes.def,
      this.atributes.fis,
      String(count),
      card
    );

  }

  public async printImage(): Promise<String> {
    const html = this.createCard();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 770, height: 658 });

    await page.setContent(html);
    await page.waitForTimeout(2000);

    const localeName = this.name.replace(/\s/g, "");

    const screenshotPromise = new Promise((resolve) => {
      page.screenshot({ path: `src/image/${localeName}.png`, omitBackground: true })
        .then(() => resolve(''));
    });

    await screenshotPromise;
    await browser.close();

    return 'Download feito.';
  }

  private validateNumbers(value: string): boolean {
    return /^\d+$/.test(value);
  }
}

export default CardService;
