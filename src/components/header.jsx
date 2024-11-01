import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { AiFillTag, AiOutlineMenu, AiOutlineSearch, AiOutlineClose ,AiFillHome, AiFillSetting, AiFillAppstore, AiFillFire, AiFillPhone, AiFillInfoCircle} from 'react-icons/ai';

function Header(props) {
    const [isClicked, setIsClicked] = useState(true);
    const [isHoveringCart, setIsHoveringCart] = useState(false);
    const [isHoveringHeart, setIsHoveringHeart] = useState(false);
    const [isHoveringMenu, setIsHoveringMenu] = useState(false);
    const [IsSliderMenu, SetIsSliderMenu] = useState(false);

    const changeMenuEnter = () => setIsHoveringMenu(true);
    const changeMenuLeave = () => setIsHoveringMenu(false);

    const changePremade = () => setIsClicked(false);
    const changeCustom = () => setIsClicked(true);

    const changeCartEnter = () => setIsHoveringCart(true);
    const changeCartLeave = () => setIsHoveringCart(false);

    const changeHeartEnter = () => setIsHoveringHeart(true);
    const changeHeartLeave = () => setIsHoveringHeart(false);

    function SliderMenuOpen() {
        SetIsSliderMenu(!IsSliderMenu);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", width: '100%', backgroundColor: "black", maxWidth: '100%', margin: '0 auto', padding: '10px 20px', boxSizing: 'border-box' }}>
            {/* 1st */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }}>
                <div style={{ marginRight: 20 }}>
                    <h1 style={{ marginTop: 27 }}>
                        <AiOutlineMenu color={"white"} size={35} onClick={SliderMenuOpen} />
                    </h1>
                </div>
                <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                    <h1
                        style={{
                            fontFamily: 'Trebuchet MS, sans-serif', fontWeight: '500', color: 'white', marginTop: 17,
                        }}>Budget
                        <span
                            style={{
                                fontFamily: 'Tahoma, sans-serif', fontWeight: '1000', fontSize: 33, color: 'yellowgreen',
                            }}>Code </span>
                    </h1>
                </div>
                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', marginLeft: 50, backgroundColor: '#00000f', width: 200, borderRadius: 50, height: 40, overflow: 'hidden' }}>
                    <div
                        onClick={changePremade}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%',
                            backgroundColor: isClicked === false ? 'darkgreen' : '#4D4D4D',
                            boxShadow: isClicked === false ? 'inset 0 0 10px green, inset 0 0 20px green, inset 0 0 30px #ADFF2F, inset 0 0 40px #ADFF2F' : 'none',
                        }}
                    >
                        <h1 style={{
                            color: isClicked === false ? 'white' : 'grey',
                            fontFamily: 'Helvetica, sans-serif', fontSize: 15
                        }}>Premade</h1>
                    </div>
                    <div
                        onClick={changeCustom}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50%',
                            backgroundColor: isClicked === true ? 'darkgreen' : '#4D4D4D',
                            boxShadow: isClicked === true ? 'inset 0 0 10px green, inset 0 0 20px green, inset 0 0 30px #ADFF2F, inset 0 0 40px #ADFF2F' : 'none',
                        }}
                    >
                        <h1 style={{ color: isClicked === false ? 'grey' : 'white', fontFamily: 'Helvetica, sans-serif', fontSize: 15 }}>Custom</h1>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div style={{ width: 700, position: 'relative', margin: '0 10px' }}>
                <FaSearch size={20} style={{ position: 'absolute', top: '50%', left: 10, marginTop: -9, color: '#555555', cursor: 'pointer' }} />
                <input type="text" placeholder="Search Templates" style={{ width: '70%', height: 40, borderRadius: 50, marginTop: 20, border: 'none', padding: '0 20px 0 40px', boxSizing: 'border-box', fontSize: 15, fontFamily: 'Helvetica, sans-serif', color: 'black', backgroundColor: 'lightgrey' }} />
            </div>

            {/* 3rd */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', display: 'inline-flex', padding: 0, margin: 0 } }}>
                    <FaHeart
                        onMouseEnter={changeHeartEnter}
                        onMouseLeave={changeHeartLeave}
                        size={30}
                        style={{
                            color: isHoveringHeart ? 'limegreen' : 'yellowgreen',
                            cursor: 'pointer',
                            marginLeft: 20,
                            transition: 'color 0.3s ease',
                        }}
                    />
                </IconContext.Provider>
                <div
                    onMouseEnter={changeCartEnter}
                    onMouseLeave={changeCartLeave}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        boxShadow: isHoveringCart ? '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.7)' : 'none',
                        transition: 'box-shadow 0.3s ease',
                        width: 110,
                        height: 40,
                        borderRadius: 50,
                        marginLeft: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <FaShoppingCart size={30} style={{ color: 'black', marginRight: 10 }} />
                    <h1 style={{ fontFamily: 'Helvetica, sans-serif', fontSize: 16, color: 'black' }}>Cart</h1>
                </div>
            </div>

            {/* Slide Navbar */}
            {IsSliderMenu && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        zIndex: 10
                    }}
                >
                    <div style={{ position: 'fixed', top: 0, left: 0, width: 500, height: '100vh', zIndex: 10, transition: '300ms', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px' }}>
                            <h1 style={{
                                fontFamily: 'Trebuchet MS, sans-serif', fontWeight: '500', color: 'white',
                            }}>
                                Budget<span style={{
                                    fontFamily: 'Tahoma, sans-serif', fontWeight: '1000', fontSize: 33, color: 'yellowgreen',
                                }}>Code</span>
                            </h1>
                            <AiOutlineClose color={'white'} size={30} onClick={SliderMenuOpen} style={{ cursor: 'pointer' }} />
                            
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillHome style={{ cursor:'pointer'}}/> <span> Home </span> </ul>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillAppstore  style={{ cursor:'pointer'}} /> <span> Premade Items </span> </ul>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillSetting   style={{ cursor:'pointer'}}/>  <span> Custom Items </span> </ul>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillFire  style={{ cursor:'pointer'}} />  <span> Trending </span> </ul>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillPhone   style={{ cursor:'pointer'}}/> <span> Contact Us </span> </ul>
                            <ul style={{ color: 'white', fontSize: 25, marginTop: 10 , cursor:'pointer'}}> <AiFillInfoCircle  style={{ cursor:'pointer'}}/>  <span> About Us </span> </ul>
                        </div>

                        {/* ...............login................ */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 10, position: 'fixed', bottom: 150, left: 350}}>

                            <button style={{height :30 , width:60 , backgroundColor: 'yellowgreen', border:'none', borderRadius:20}}>Log in</button>
                            <button style={{height :30 , width:60 , backgroundColor: 'lightblue', border:'none', borderRadius:20}}>Register</button>


                        </div>

                       
                    </div>
                </div>


              //Login







            )}
        </div>
    );
}

export default Header;
