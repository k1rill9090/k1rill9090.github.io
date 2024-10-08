import React from 'react'
import styles from './Slider.module.sass'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Slider = ({imgs}) => {
 
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1},
    };
    
    const items1 = imgs.map((elem) =>  
        <div className={styles.item} data-value="1">
            <img 
                src={elem} 
                height='400px' 
                width='450px'
            />
        </div>
    );

  return (
    <div className={styles.main}>
        <AliceCarousel
            items={items1}
            responsive={responsive}
            controlsStrategy="alternate"
    />
    </div>
  )
}

export default Slider