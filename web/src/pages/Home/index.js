import React from 'react'
import { FaAddressCard, FaArrowAltCircleRight, FaNodeJs, FaPhp, FaHtml5 } from 'react-icons/fa'
import { DiJavascript, DiReact, DiCss3 } from 'react-icons/di'

import Frame from '../../components/Frame'
import { techsArray } from '../../config/homeInfo.json';

import './style.css'
export default function Home(){
    function getIcon(name,color){
        let element
        switch (name) {
            case 'DiJavascript':
                element = (<DiJavascript style={{color:color}}/>)
                break;
            case 'DiReact':
                element = (<DiReact style={{color:color}}/>)
                break;
            case 'FaNodeJs':
                element = (<FaNodeJs style={{color:color}}/>)
                break;
            case 'FaPhp':
                element = (<FaPhp style={{color:color}}/>)
                break;
            case 'FaHtml5&DiCss3':
                element = (<><FaHtml5 style={{color:color}}/><DiCss3 style={{color:'#32a4a8'}}/></>)
                break;
            default:
                element = null
                break;
        }
        return element
    }
    return (
        <Frame>
            <div id="Home">
                <section id='About' className='flexbox mobile-flexDirection-colum'>
                    <div>
                        <h1 className='title'>edson junior</h1>
                        <h2 className='subtitle'>WEB developer</h2>
                        <p className='text-content'>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Quae illum similique sapiente recusandae maiores. Culpa
                        quam animi delectus id 
                        <a className='link' href="d">molestias</a> 
                        deserunt optio, incidunt in necessitatibus nobis eligendi
                        quod quae laudantium.</p>
                        <div className='flexbox'>
                            <button className='button colored'><FaArrowAltCircleRight/>view portifolio</button>
                            <button className='button'><FaAddressCard/>view resume</button>
                        </div>
                    </div>
                    <img className='dev_img' src="https://cdn.dribbble.com/users/639879/screenshots/6791770/dribbble-devcard.png" alt=""/>
                </section>
                <hr/>
                <section id='What_i_do'>
                    <h1 className="small-title title-caps">what i do</h1>
                    <p className="text-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ea soluta repudiandae deserunt omnis, repellat voluptatem in optio commodi cum minima, totam deleniti reprehenderit voluptate itaque, ad atque earum modi?
                    </p>
                </section>
                <section id='Techs'>
                    <ul className='techs-list'>
                        {techsArray.map((tech) => {
                            return(
                                <li key={tech.name} className='tech'>
                                <div className='icons'>
                                    {getIcon(tech.icon,tech.color)}
                                </div>
                                <h3 className='language'>{tech.name}</h3>
                                <p className='knowledge'>{tech.knowledge}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        </Frame>
    )
}