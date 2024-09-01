import React , {useState} from 'react'

const LikeButton = (props) => {
    const {likecount} = props
    const [like, likeCount] = useState(likecount)

    const incrementLike = () => {
        likeCount(like + 1 )
    }
    const decrementLike = () => {
        likeCount(like - 1 )
    }
    return (
        <div>
        <p>LIKE : {like}</p>
        <button onClick={incrementLike}>LIKE ++</button>
        <button onClick={decrementLike}>LIKE --</button>
        </div>
    )
}

export default LikeButton
