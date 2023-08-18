import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';




const Nav = styled.nav`
  padding: 0 0px;
  min-height: 5vh;
  z-index:10;
  background: #103452;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(min-width:768px){
    padding:20px;
  }
  @media(min-width:1200px){
    padding:20px 50px;
}
  img{
    width:50%;
    @media(min-width:992px){
        width:400px;
    }
  }
  ul{
    
    align-items: center;
    @media(min-width:769px){
        display: flex;
    }
    li{
        width:max-content;
        display:block;
        position:relative;
        &:last-child{
            margin:0 15px;
            
            a{
                display:flex;
                align-items:center;
                color:${props => props.theme.color.white};
                opacity:1;
                svg{
                    color:${props => props.theme.color.orange};
                    height:20px;
                    width:25px;
                }
                &:before{
                  bottom:-70%;
                }
            }
        }
        a{
            font-family:${props => props.theme.fam.bold};
            text-transform:uppercase;
            width:max-content;
            opacity:0.3;
            transition:all 0.7s ease;
            display:block;
            font-size:16px;

            color:${props => props.theme.color.blue};
            @media(min-width:992px){
                font-size:16px;
            }
            @media(min-width:1200px){
                font-size:20px;
            }
        }
        .active{
      opacity:1;
      &:before{
        height:20px;
        width:20px;
        background:${props => props.theme.color.blue};
        position:absolute;
        content:"";
        transition:all 0.7s ease;
        bottom:-100%;
        left:50%;
        transform:translateX(-50%);
        border-radius:50%;
      }
    }
    }
    
  }
`;



const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;



const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #000000;
  transition: width 0.4s ease-in-out;

  &:nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  z-index:10;
  transition: height 0.4s ease-in-out;
  @media(min-width:568px){
    height: ${props => (props.open ? "500px" : 0)};
  }
  @media (min-width: 769px) {
    display: none;
  }
  
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align:center;
  
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px auto;
    transition: opacity 0.4s ease-in-out;
    width:max-content;
  }

  li:nth-child(2) {
    margin: 50px auto;
  }
  a{
    color: white;
  text-decoration: none;
    font-family:${props => props.theme.fam.extrabold};
    text-transform:uppercase;
    display:flex;
    align-items:center;
    
  :hover {
    text-decoration: underline;
  }
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Link to='/'>
          <img src="https://www.hyperiondev.com/static/images/logo.svg" alt="hyperion dev logo" height={'50vh'} />
        </Link>
        <Menu>
          <li alt="go to home page">
            <NavLink to="/">Home</NavLink>
          </li>

          <li alt="go to portfolio">
            <NavLink to="/2" >Portfolio</NavLink>
          </li>
          <li alt="go to portfolio">
            <NavLink to="/w">Portfolio</NavLink>
          </li>
          <li alt="go to portfolio">
            <NavLink to="/y" >Portfolio</NavLink>
          </li>

        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>

          <li onClick={() => toggleNav(false)} alt="go to portfolio">
            <NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink>
          </li>

          <li alt="go to portfolio">
            <NavLink to="/2" >Portfolio</NavLink>
          </li>
          <li alt="go to portfolio">
            <NavLink to="/w">Portfolio</NavLink>
          </li>
          <li alt="go to portfolio">
            <NavLink to="/y" >Portfolio</NavLink>
          </li>

        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
