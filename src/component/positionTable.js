import React from 'react'
import PositionTr from './positionTr'

class PositionTable extends React.Component{
    state={
        positionList:[]

    }
    render(){
        return(
            <section className="comrce-bmelog-wrapper col-12 md-col-9 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1">
            <article>
            <div className="table-responsive mt3">
                <table className="table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th className="xs-hide">Longitude</th>
                            <th className="xs-hide">Latitude</th>
                            <th>Nom du lieu</th>
                            <th>Description</th>
                            <th>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                        <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                        <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                        <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                        <PositionTr id='1' long="3.23323423" lat="24.224222242" name="Salle 4 batiment japonais" description='sdjlsqkdfklsqnfkqsnlfknl'></PositionTr>
                    </tbody>
                </table>
            </div>
        </article></section>
        )
    }
}


export default PositionTable