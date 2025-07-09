import React from "react";
function News(props) {
    console.log(props);

    return (
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage != null ?
                        <img src={props.article.urlToImage} /> :
                        <img src="https://gambrinus.hu/packages/gambrinus/images/no_img.jpg" />
                }
            </div>

            <h2>{props.article.title}</h2>

            <p>{props.article.description?.substring(0, 100).concat("...")}<a href={props.article.url} target="blank" >Read More</a></p>

            <div className="source">
                <p>Author : {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
    )
}
export default News;