import { Card, Container, Stack } from "react-bootstrap"
import { useState, useEffect } from "react";

export default function Body({pageType}) {
    const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [news, setNews] = useState([]);


    useEffect(() => {
        (async () => {
            const url = BASE_API_URL + '/get_categories';
            const response = await fetch(url, {
                //mode: 'no-cors',
                //credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                }
            });
            if (response.ok) {
                const results = await response.json();
                setCategories(results.categories);            
                setSelectedCategory(results.categories[0].id)
            }
        })()
    }, []
    );

    function changeCategory(event) {
        event.preventDefault();
        //setSelectedCategory(category);
        console.log('on change' + event);
        console.log(event);
        setSelectedCategory(event.target.id);
        (async () => {
            const url = BASE_API_URL + '/get_news/'+event.target.id;
            const response = await fetch(url, {
                //mode: 'no-cors',
                //credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                }
            });
            if (response.ok) {
                const results = await response.json();
                console.log('fetch news');
                console.log(results);
                console.log(results.news);
                setNews(response.news);
                //setCategories(results.categories);            
                //setSelectedCategory(results.categories[0].id)
            }
        })()

    }

    return (
        <Container>
            {pageType} - {selectedCategory && selectedCategory} - {news && news.length}
            <Stack direction="horizontal" gap={3}>
                {categories && categories.map(c => {
                    return (
                        <button id={c.id} onClick={changeCategory}>{c.name}</button>
                    );
                })}

{/* "domain": "vietnamnet.vn",
      "url": "https://vietnamnet.vn/giai-u15-quoc-gia-2023-ha-tinh-va-ba-ria-vung-tau-thang-tran-dau-2176081.html",
      "title": "Giải U15 Quốc gia 2023: Hà Tĩnh và Bà Rịa Vũng Tàu thắng trận đầu",
      "intro": "Hà Tĩnh và Bà Rịa Vũng Tàu cùng thắng trận ra quân, có sự khởi đầu thuận lợi tại giải U15 Quốc gia 2023.",
      "image": "$VNN_CDN_KEY_SYSTEM#/publish/2023/8/10/giai-u15-quoc-gia-2023-ha-tinh-va-ba-ria-vung-tau-thang-tran-dau-1316.jpg",
      "category": "the-thao",
      "published_at": 1691681106 */}
                {news && 
                    news.map(n => {
                        <Card>
                            <Card.Body> 
                                <Card.Title> n.title </Card.Title>
                                <Card.Text> n.intro </Card.Text>
                                <a href={n.url}>Read </a>
                            </Card.Body>
                        </Card>
                    })
                }

                {news && news}
            </Stack>
            
        </Container>
    )
}