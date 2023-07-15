import React from "react";
import img from './images/motherboard.jpg'
import pro_img from './images/processor.jpg'
import ram_img from './images/ram.jpg'
import power_img from './images/power.jpg'
import ssd_img from './images/ssd.jpg'
import cabinet_img from './images/cabinet.jpg'

export default function Content(probs) {
    const squareBoxStyles = {
        width: '350px',
        height: '400px',
        // border: '2px solid black',
    };
    const boxStyles = {
        cursor: 'pointer',
    };
    const mo_img = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        height: '200px',
        mixBlendMode: 'multiply',
    }
    const pro_im = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${pro_img})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        mixBlendMode: 'multiply',
        backgroundPositionX: '30px'
    }
    const ram_im = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${ram_img})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        mixBlendMode: 'multiply',
        // backgroundPositionX: '-30px'
        // backgroundPositionX: '30px'
    }
    const power_im = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${power_img})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        mixBlendMode: 'multiply',
        // backgroundPositionX: '-30px'
    }
    const ssd_im = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${ssd_img})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        mixBlendMode: 'multiply',
        // backgroundPositionX: '-30px'
    }
    const cabinet_im = {
        // backgroundImage: `url(${probs.img})`,
        backgroundImage: `url(${cabinet_img})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        mixBlendMode: 'multiply',
        // backgroundPositionX: '-30px'
    }
    return (
        <>
            <div className="d-flex justify-content-around flex-wrap">
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.name}</h2>
                    <p className="text-black">{probs.item_name} </p>
                    <div className="image" style={mo_img}></div>
                    <p className="text-black">Price is {probs.price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/MSI-PRO-VDH-Motherboard-RyzenTM-Processors/dp/B08BCR4ZRS/ref=sr_1_3?keywords=motherboard+b550+wifi&qid=1689426774&sprefix=motherboard+b55%2Caps%2C310&sr=8-3">Link</a>
                </div>
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.processer}</h2>
                    <p className="text-black">{probs.pro_name} </p>
                    <div className="image" style={pro_im}></div>
                    <p className="text-black">Price is {probs.pro_price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/dp/B092L9GF5N?&linkCode=sl1&tag=pichub-21&linkId=530cbfe6c8dc82238b5ec240fa0d5cfc&language=en_IN&ref_=as_li_ss_tl">Link</a>
                </div>
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.power}</h2>
                    <p className="text-black">{probs.pow_name} </p>
                    <div className="image" style={power_im}></div>
                    <p className="text-black">Price is {probs.pow_price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/dp/B08DK7MVKX?linkCode=sl1&tag=pichub-21&linkId=65f80f7a9fe7dc4a0953342c05f33a02&language=en_IN&ref_=as_li_ss_tl&th=1">Link</a>
                </div>
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.ram}</h2>
                    <p className="text-black">{probs.ram_name} </p>
                    <div className="image" style={ram_im}></div>
                    <p className="text-black">Price is {probs.ram_price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/dp/B085HSGQ1Y?&linkCode=sl1&tag=pichub-21&linkId=ec2a25025d90f44101a609b5217f35e1&language=en_IN&ref_=as_li_ss_tl">Link</a>
                </div>
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.ssd}</h2>
                    <p className="text-black">{probs.ssd_name} </p>
                    <div className="image" style={ssd_im}></div>
                    <p className="text-black">Price is {probs.ssd_price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/dp/B093QL56WR?linkCode=sl1&tag=pichub-21&linkId=c598a722d01bd7eafd319dac0e23124b&language=en_IN&ref_=as_li_ss_tl&th=1">Link</a>
                </div>
                <div className="box bg-white text-light p-3 text-center " style={squareBoxStyles}>
                    <h2 className="mb-3 text-black">{probs.cabinet}</h2>
                    <p className="text-black">{probs.cabinet_name} </p>
                    <div className="image" style={cabinet_im}></div>
                    <p className="text-black">Price is {probs.cabinet_price} </p>
                    <a className="text-black " target="_blank" style={boxStyles} href="https://www.amazon.in/Ant-Esports-Computer-Gaming-Cabinet/dp/B0BHW8GPXF/ref=sr_1_5?keywords=cabinet%2Bfor%2Bpc&qid=1689431871&sprefix=cabi%2Caps%2C851&sr=8-5&th=1">Link</a>
                </div>
            </div>

        </>
    );
}