    const getContent = (category, products) => {
        const template =
        `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${category}</title>
                </head>
                <body>
                <a href="/">HOME</a>
                <h1>Productos de ${category}</h1>
                <ul>
                    ${products.map(product => `<li><h2>${product.name}</h2><p>${product.price}€ - ${product.stock} unidades</p></li>`).join("")}
    
                </ul>
                </body>
            </html>
        `
        return template
    }

module.exports = getContent