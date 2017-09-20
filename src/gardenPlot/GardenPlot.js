import React from 'react';

export default function GardenPlot( props ) {

    const {garden, plotClicked, selectedPlant, activeAction} = props;
    const { _id, width, length, plot } = garden;


    return (
        <div id={_id}>
            <div
                style={renderPlot(width, length)}
                onClick={event => {
                    const x = event.screenX;
                    const y = event.screenY;
                    if (event.target.id === _id) return plotClicked(activeAction, garden, selectedPlant._id, x, y);
                    plotClicked(activeAction, _id, event.target._id, x, y);
                }}>
                {plot && Object.keys(plot).map(key => {
                    const {instanceId, img, xPosition, yPosition, type} = plot[key];

                    const xVal = xPosition;
                    const yVal = yPosition;
                    const transform = `translate( ${ xVal }px, ${ yVal }px)`;

                    return <img
                        id={instanceId}
                        src={img}
                        style={{transform}}
                        alt={type} />;
                })}
            </div>
        </div>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}