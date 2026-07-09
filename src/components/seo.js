import * as React from "react"
import Helmet from "react-helmet"
import config from "../../config"


export const seo = ( { description, keywords, title, url, author,image}) => {
    const metaDescription = description || "Subin's Nightmares are all here..."
    const metaTitle = title || config.siteTitle
    const metaUrl = url || "https://subamzak.netlify.app"
    const metaAuthor = author || "Subin Jeong"
    const metaImage = image || ""
    const metaKeywords = keywords || ["gatsby","Projects","Mechanics","Electronics","Computer","Mechatronics"]

    return(
        <Helmet 
            title={metaTitle}
            meta={[
                {
                    name:`description`,
                    content: metaDescription,
                },
                {
                    property:`og:title`,
                    content:metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:url`,
                    content: metaUrl,
                },
                {
                    property: `og:author`,
                    content: metaAuthor,
                },
                {
                    property: `og:keywords`,
                    content: metaKeywords,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name:`twitter:card`,
                    content:metaImage,
                },
                {
                    name:`twitter:title`,
                    content:metaTitle,
                },                    
                {
                    name:`twitter:description`,
                    content:metaDescription,
                },  
                {
                    name:`twitter:creator`,
                    content:metaAuthor,
                },
                {
                    name:`twitter:image`,
                    content:metaImage,
                },

            ].concat(
                metaKeywords && metaKeywords.length>0 ? 
                {
                    name:'keywords',
                    content:metaKeywords.join(`,`),
                }
                :[]
            )}
        />
    )
}
