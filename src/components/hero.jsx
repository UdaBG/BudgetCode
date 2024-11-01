import React from "react";

function Hero(props) {
    return (
        <div style={{
            marginTop: 20,
            position: 'relative',
            maxWidth: '1640px',
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'black',
            borderRadius: 20,
            overflow: 'hidden',
            height: '500px'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: 20,
                padding: '0 20px'
            }}>
                <h1 style={{
                    fontWeight: 'bold',
                    fontSize: '4.5rem',
                    color: 'white',
                }}>the <span style={{ color: 'yellowgreen', marginLeft: 20 }}>best</span></h1>
                <h2 style={{
                    fontWeight: 'bold',
                    fontSize: '4.5rem',
                    color: 'white',
                    marginTop: -50
                }}><span style={{ color: 'yellowgreen' }}>new</span> templates</h2>
            </div>
            <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 20
            }} src="https://miro.medium.com/v2/resize:fit:916/1*z2BaY_MTgmcjgLfNyGQJ4g.png" alt="Hero background" />
        </div>
    );
}

export default Hero;
