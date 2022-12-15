import React, { useState } from 'react'
import * as RiIcons from 'react-icons/ri';
import { Profilelabel } from './Navbar/NavbarElements'
export default function ProfileImageInput(props) {
    const { error  } = props;
    return (
        <>
            <div>
                <p>
                    <input
                        {...props}
                    />
                    <Profilelabel htmlFor="pic">Restaurant Profile</Profilelabel>
                </p>
            </div>
            {error ? (
                <p
                    style={{
                        paddingTop: 5,
                        fontSize: 13,
                        color: "red"
                    }}>
                    {error}
                </p>
            ) : null}
        </>
    );
}
