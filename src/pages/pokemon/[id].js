import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Pokemon({ pokemon }) {
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Imagem do Pokemon" />

            <Link href="/">
                <a>Voltar a pagina anterior</a>
            </Link>
        </div>
    );
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        sprites: PropTypes.shape({
            front_default: PropTypes.string,
        }),
    }).isRequired,
};


export async function getStaticProps({ params }) {
    // connecting pokeAPI
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }

            throw new Error("Deu problema!")
        })
        // get response in object JSON
        .then((RespostaEmObjeto) => {
            return RespostaEmObjeto;
        });

    return {
        props: {
            pokemon,
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    return {
        paths: new Array(151).fill(null).map((_, index) => (
            { params: { id: `${index + 1}` } }
        )),
        fallback: false
    };
}
