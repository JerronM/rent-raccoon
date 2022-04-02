import React from 'react'
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images.pexels.com/photos/545065/pexels-photo-545065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            <div className="home__row">
                <Product
                id="0000000001" 
                title='Bouncy Castle: Monkey palace themed with slides ' 
                price={50} 
                image="https://ideas-for-kids-parties.com/wp-content/uploads/2019/11/bouncy-castle.jpg" />      
                <Product 
                id="0000000002" 
                title='Rickenbacker 325 Electric Guitar: Fireglo finish & tripple pickups' 
                price={75} 
                image="https://cdn.shoplightspeed.com/shops/643427/files/30894336/1652x1652x1/rickenbacker-1967-rickenbacker-325-3-pickup.jpg" />      
            </div>
            <div className="home__row">
                <Product
                id="0000000001" 
                title='Bouncy Castle: Monkey palace themed with slides ' 
                price={50} 
                image="https://ideas-for-kids-parties.com/wp-content/uploads/2019/11/bouncy-castle.jpg" />      
                <Product 
                id="0000000002" 
                title='Rickenbacker 325 Electric Guitar: Fireglo finish & tripple pickups' 
                price={75} 
                image="https://cdn.shoplightspeed.com/shops/643427/files/30894336/1652x1652x1/rickenbacker-1967-rickenbacker-325-3-pickup.jpg" />      
            </div>
            <div className="home__row">
                <Product 
                id="0000000003" 
                title='Cotton Candy Machine: Blue and pinks sugar + cones included' 
                price={20} 
                image="https://okiedokiepartyrental.com/wp-content/uploads/2018/12/maq.jpeg" />      
                <Product 
                id="0000000004" 
                title='DJ Equipment: Complete turntable set up with midi controls' 
                price={150} 
                image="https://assets.website-files.com/5abf6872d0f264292bfb1c2d/5b0286b08f4f83b39f3ead89_equipmentmain.jpg" />      
                <Product 
                id="0000000005" 
                title='Nikon D3500 24.2 MP DSLR Camera' 
                price={70} 
                image="https://images.unsplash.com/photo-1613413643687-f542f6b34969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa29uJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />      
            </div>
            <div className="home__row">
                <Product 
                id="0000000006" 
                title='12-Foot Velocity Ladder' 
                price={15} 
                image="https://www.thespruce.com/thmb/PdtLu9io-M4dnLmMvuNRVR3QxPw=/3840x3840/smart/filters:no_upscale()/1SP4153436-27-65cbea0148c642e681f365def52273f5.jpg" />      
                <Product
                id="0000000007"  
                title='Rug Doctor Carpet Cleaner: 16 Oz of carpet cleaner included' 
                price={30} 
                image="https://www.thespruce.com/thmb/4aEUhfm7QdUUsZh4ZlDGUUD3W_A=/1500x1500/filters:no_upscale()/_hero_SQ_3SP4107087-1-4bfa65536f1c44689fa0cb0fd614dfb4.jpg" />      
                <Product 
                id="0000000008" 
                title='DeWalt D24000s Wet Saw: New blade used with finger gaurd' 
                price={50} 
                image="https://www.acmetools.com/on/demandware.static/-/Sites-acme-catalog-m-en/default/dwf9371bcf/images/images/catalog/product/0/03A969ED-F3D7-4A77-972F-4FF3558742A1_7.jpg" />      
            </div>

            </div>
        </div>
    );
}

export default Home;
