import React from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { UserCard } from './check/components/UserCard';
import { PostCard } from './check/components/PostCard';
import { useAllUsers } from './check/hooks/useAllUsers';
import { useAllPosts } from './check/hooks/useAllPosts';
import { SetBtn } from './check/components/SetBtn';

function App() {
    const { getUsers, userProfiles, loading, error } = useAllUsers();
    const { getPosts, userPosts, loadingPosts, errorPosts } = useAllPosts();

    const onClickFetchCaps = () => getUsers();
    const onClickFetchTops = () => getPosts();

    return (
        <>
            <div className="centerContainer">
                <div className="mannequinImg">
                    <div style={{ display: "flex", overflowX: "scroll" }}>
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
                    </div>

                    <div style={{ display: "flex", overflowX: "scroll" }}>
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
                    </div>
                    
                    <div style={{ display: "flex", overflowX: "scroll" }}>
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
