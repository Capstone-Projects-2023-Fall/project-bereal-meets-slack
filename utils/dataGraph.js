const {pool} = require('./dbconn.js');
const {ChartJSNodeCanvas} = require('chartjs-node-canvas');


async function fetchDataForGraph(guildId) {
    const query = 'SELECT prompt_text, num_reactions FROM responses WHERE guild_id = ?'; 
    const [rows] = await pool.query(query, [guildId]);
    return rows;
}


const backgroundColorPlugin = {
    id: 'backgroundColorPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 800, 600);
        ctx.restore();
    }
};


const generateGraph = async (data) => {
    const width = 800; //width of the graph
    const height = 600; //height of the graph
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });
    const configuration = {
        type: 'bar', // this is the type
        data: {
            labels: data.map(d => d.prompt_text), // x-axis labels -> prompt_text
            datasets: [{
                label: 'Number of Reactions',
                data: data.map(d => d.num_reactions), // y-axis data -> num_reactions
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Prompts' // this is the label for the x-axis
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Reactions' // this is the for the y-axis
                    }
                }
            }, 
            plugins: [backgroundColorPlugin]
        }
    };

    return await chartJSNodeCanvas.renderToBuffer(configuration);
};

module.exports = { fetchDataForGraph, generateGraph };
