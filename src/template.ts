export const template = (
name: string,
position: string,
vel: string,
fin: string,
pas: string,
dib: string,
def: string,
fis: string,
total: string,
card: string
): string => {
return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cards</title>
    <link rel="stylesheet" href="style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;600;700;900&display=swap');

        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        .background-container {
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .background-image {
          background-image: url('${card}');
          background-size: auto;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          width: 422px;
          height: 591px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .container {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .name {
          font-size: 2em;
          color: #3d351e;
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          z-index: 2;
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .att-value {
          font-size: 1.8em;
          color: #3d351e;
          z-index: 1;
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 700;
          margin: 0 10px;
          margin-top: 370px;
        }

        #vel {
          position: absolute;
          left: 219px;
        }

        #fin {
          position: absolute;
          left: 276px;
        }

        #pas {
          position: absolute;
          left: 330px;
        }

        #dib {
          position: absolute;
          left: 385px;
        }

        #def {
          position: absolute;
          left: 439px;
        }

        #fis {
          position: absolute;
          left: 495px;
        }

        #total {
          font-size: 4.5em;
          color: #3d351e;
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 800;
          position: absolute;
          top: 130px;
          left: 30%;
          margin: 0;
          padding: 0;
        }

        #position {
          font-size: 2em;
          color: #3d351e;
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 600;
          position: absolute;
          top: 200px;
          left: 29%;
          width: 3em;
          text-align: center;
          margin: 0;
          padding: 0;
        }
    </style>
</head>
<body>
    <div class="background-container">
        <div class="background-image"></div>
        <div class="container">
            <h2 id="total">${total}</h2>
            <h3 id="position">${position}</h2>
            <h1 class="name">${name}</h1>
            <p id="vel" class="att-value">${vel}</p>
            <p id="fin" class="att-value">${fin}</p>
            <p id="pas" class="att-value">${pas}</p>
            <p id="dib" class="att-value">${dib}</p>
            <p id="def" class="att-value">${def}</p>
            <p id="fis" class="att-value">${fis}</p>
        </div>
    </div>
</body>
</html>
`
};
