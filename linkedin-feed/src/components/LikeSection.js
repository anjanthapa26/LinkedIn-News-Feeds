import React from 'react'

const LikeSection = ({val}) => {
    console.log('entered')

    console.log(val)
    const hoverEffect = {
        height:'40px',
        display:'flex',
        opacity:'1',
        backgroundColor:'white',
        border: '1px solid rgba(0,0,0,0.09)',
        borderRadius:'6px',
    }

    const outerHover = {
        position:'absolute',
        top:'0',
        left:'0',
        transition:'opacity 1s',
        marginTop:'-15px',
    }


  return (
    <div style={outerHover}>
        <div style={hoverEffect}>
            <img style={{paddingLeft:'5px'}}src='https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l'></img>
            <img style={{paddingLeft:'5px'}} src='https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo'></img>
            <img style={{paddingLeft:'px'}} src='https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm'></img>
        </div>
        </div>

  )
}

export default LikeSection
