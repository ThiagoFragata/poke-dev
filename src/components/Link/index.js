import React from 'react';
import PropsTypes from 'prop-types';
import NextLink from 'next/link';

export default function Link({ href, children }) {
    return (
        <NextLink href={href} passHref>
            <a>
                {children}
            </a>
        </NextLink>
    );
}

Link.propTypes = {
    href: PropsTypes.string.isRequired,
    children: PropsTypes.node.isRequired,
};