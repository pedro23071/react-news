import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => (
    <div className="row">
        { noticias.map(noticia=>(
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
);

export default ListaNoticias;