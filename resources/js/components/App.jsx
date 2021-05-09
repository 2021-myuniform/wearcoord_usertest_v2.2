import React from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import { UserCard } from './check/components/UserCard';
import { PostCard } from './check/components/PostCard';
import { useAllUsers } from './check/hooks/useAllUsers';
import { useAllPosts } from './check/hooks/useAllPosts';
import { SetBtn } from './check/components/SetBtn';
import { useAllCaps } from './check/hooks/useAllCaps';
import { useAllTops } from './check/hooks/useAllTops';

function App() {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();

    const onClickFetchCaps = () => getCaps();
    const onClickFetchTops = () => getTops();

    return (
        <>
            <div className="centerContainer">
                <div className="mannequinImg">
                    {/* <div style={{ display: "flex", overflowX: "scroll" }}>
                        {error ? (
                            <p style={{ color: "red" }}>データの取得に失敗しました</p>
                        ) : loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                {userProfiles.map((user) => (
                                    <UserCard key={user.id} user={user} />
                                ))}
                            </>
                        )}
                    </div> */}

                    {/* <div style={{ display: "flex", overflowX: "scroll" }}>
                        {error ? (
                            <p style={{ color: "red" }}>データの取得に失敗しました</p>
                        ) : loadingPosts ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <Swiper id="controller2"
                                    slidesPerView={3}
                                    centeredSlides={true}
                                >
                                    {userPosts.map((post) => (
                                        <SwiperSlide key={post.id}  >
                                        <p>{post.body}</p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div> */}

                    <div style={{ display: "flex", overflowX: "scroll" }}>
                        {userCaps.length ? (error ? (
                            <p style={{ color: "red" }}>データの取得に失敗しました</p>
                        ) : loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <Swiper id="controller"
                                    slidesPerView={3}
                                    centeredSlides={true}
                                // onSlideChange={(e) => console.log(e)}
                                >
                                    {userCaps.map((wear) => (
                                        <SwiperSlide className="wearLi" key={wear.id}  >
                                            <img className="wearImg" src={wear.url} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )) : (
                            <div style={{ textAlign: "center", margin: "auto" }}>
                                <img style={{ width: "28%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src='/img/rakutenlist/asics/male/506269/red/chitosesports-b_10018514.png' alt="" />
                            </div>
                        )}
                    </div>

                    <div style={{ display: "flex", overflowX: "scroll" }}>
                        {userTops.length ?
                        (error ? (
                            <p style={{ color: "red" }}>データの取得に失敗しました</p>
                        ) : loadingTops ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <Swiper id="controller2"
                                    slidesPerView={3}
                                    centeredSlides={true}
                                >
                                    {userTops.map((wear) => (
                                        <SwiperSlide className="wearLi" key={wear.id}  >
                                            <img className="wearImg" src={wear.url} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )) : (
                            <div>
                                <img style={{ width: "100%", height: "130px", objectFit: "contain", position: "absolute", top: "66px", objectPosition: "36px" }} src='img/rakutenlist/asics/male/508759/blue/chitosesports_10043147navy.png' alt="" />
                            </div>
                        )}
                    </div>

                    <div style={{ display: "flex", overflowX: "scroll" }}>
                        {userTops.length ?
                        (error ? (
                            <p style={{ color: "red" }}>データの取得に失敗しました</p>
                        ) : loadingTops ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <Swiper id="controller3"
                                    slidesPerView={3}
                                    centeredSlides={true}
                                >
                                    {userTops.map((wear) => (
                                        <SwiperSlide className="wearLi" key={wear.id}  >
                                            <img className="wearImg" src={wear.url} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )) : (
                            <div>
                                <img style={{ width: "100%", height: "130px", objectFit: "contain", position: "absolute", top: "66px", objectPosition: "36px" }} src='img/rakutenlist/asics/male/508759/blue/chitosesports_10043147navy.png' alt="" />
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <button onClick={onClickFetchCaps}>Caps</button>
            <br />
            <button onClick={onClickFetchTops}>Tops</button>
            {/* <SetBtn onClick={onClickFetchCaps, onClickFetchTops} /> */}
        </>
    );
}


if (document.getElementById('main')) {
    ReactDOM.render(<App />, document.getElementById('main'));
}
