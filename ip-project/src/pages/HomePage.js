import {
  FaHome,
  FaEllipsisH,
  FaRegHeart,
  FaRegCommentDots,
  FaShareAlt,
  FaUserAlt,
  FaRegFile,
  FaGlobe,
} from "react-icons/fa";
import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <main>
      <div className="container">
        {/* <!----left-side-----------> */}
        <div className="left-side">
          <div className="topic-links">
            <a href="#">
              <img className="picture" src="../../images/general.jpg" />
              <h3>General</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/projects.jpg" />{" "}
              <h3>Projects</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/cess.jpg" />
              <h3>Computer</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/mecha.jpg" />
              <h3>Mechatronics</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/energy.jpg" />
              <h3>Energy</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/arch.jpg" />
              <h3>Architecture</h3>
            </a>
            <a href="#">
              <img className="picture" src="../../images/comm.jpg" />
              <h3>Communications</h3>
            </a>
          </div>
          <div className="footer">
            About . Careers . Terms . Privacy . Acceptable Use . Businesses
            Press . Your Ad Choices
          </div>
        </div>

        {/* <!---------------END of Left------------------------>
         <!----main-content----------->
         <!--------------------------------post something---------------> */}
        <div className="main-content">
          <div className="create-post">
            <div className="profile-photo">
              <h3 className="user-page">
                <FaHome />
              </h3>
            </div>
            <input
              type="text"
              placeholder="What do you want to ask or share?"
              id="create-post"
            />
            <input type="submit" value="Post" className="btn btn-primary" />
          </div>
          {/* <!--------------------feed------------------------------------> */}
          <div className="feeds">
            {/* <!-------------------feed1---------------------------------> */}
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src="images/profile1.jpg" />
                  </div>
                  <div className="ingo">
                    <h3>Lana Del Rey</h3>
                    <small>CESS, 15 MINUTES AGO</small>
                  </div>
                </div>
                <span className="edit">
                  <h3 className="ellipsis-icon">
                    <FaEllipsisH />
                  </h3>
                </span>
              </div>
              <div className="photo">
                <img src="images/feed1.jpg" />
              </div>
              <div className="action-button">
                <div className="interaction-buttons">
                  <span>
                    <h4 className="heart-icon">
                      <FaRegHeart />
                    </h4>
                  </span>
                  <span>
                    <h4 className="comment-icon">
                      <FaRegCommentDots />
                    </h4>
                  </span>
                  <span>
                    <h4 className="share-icon">
                      <FaShareAlt />
                    </h4>
                  </span>
                </div>
              </div>
              <div className="liked-by">
                <span>
                  <img src="images/profile4.jpg" />
                </span>
                <span>
                  <img src="images/profile3.jpg" />
                </span>
                <span>
                  <img src="images/profile2.jpg" />
                </span>
                <p>
                  Liked by <b>Laila Mohamed</b> and <b>500 others</b>
                </p>
              </div>
              <div className="caption">
                <p>
                  <b>Lana Del Rey</b>
                  Can someone please help me out with this code. I can not catch
                  the error.
                </p>
              </div>
              <div className="text-muted">View all 50 comments</div>
            </div>

            {/* <!-------------------feed2---------------------------------> */}
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src="images/profile4.jpg" />
                  </div>
                  <div className="ingo">
                    <h3>Dr Hamid</h3>
                    <small>Assistant Prof, 30 MINUTES AGO</small>
                  </div>
                </div>
                <span className="edit">
                  <h3 className="ellipsis-icon">
                    <FaEllipsisH />
                  </h3>
                </span>
              </div>
              <div className="photo">
                <img src="images/feed2.jpg" />
              </div>
              <div className="action-button">
                <div className="interaction-buttons">
                  <span>
                    <h4 className="heart-icon">
                      <FaRegHeart />
                    </h4>
                  </span>
                  <span>
                    <h4 className="comment-icon">
                      <FaRegCommentDots />
                    </h4>
                  </span>
                  <span>
                    <h4 className="share-icon">
                      <FaShareAlt />
                    </h4>
                  </span>
                </div>
              </div>
              <div className="liked-by">
                <span>
                  <img src="images/profile5.jpg" />
                </span>
                <span>
                  <img src="images/profile3.jpg" />
                </span>
                <span>
                  <img src="images/profile2.jpg" />
                </span>
                <p>
                  Liked by <b>Ilaria Refaat</b> and <b>200 others</b>
                </p>
              </div>
              <div className="caption">
                <p>
                  <b>Dr Hamid</b>
                  Congratulations className 2022!! You made us all proud!
                </p>
              </div>
              <div className="text-muted">View all 33 comments</div>
            </div>
            {/* <!-------------------feed3---------------------------------> */}
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-picture">
                    <img src="images/profile2.jpg" />
                  </div>
                  <div className="ingo">
                    <h3>Rose Ryan</h3>
                    <small>CESS, 15 MINUTES AGO</small>
                  </div>
                </div>
                <span className="edit">
                  <h3 className="ellipsis-icon">
                    <FaEllipsisH />
                  </h3>
                </span>
              </div>
              <div className="photo">
                <img src="images/feed3.jpg" />
              </div>
              <div className="action-button">
                <div className="interaction-buttons">
                  <span>
                    <h4 className="heart-icon">
                      <FaRegHeart />
                    </h4>
                  </span>
                  <span>
                    <h4 className="comment-icon">
                      <FaRegCommentDots />
                    </h4>
                  </span>
                  <span>
                    <h4 className="share-icon">
                      <FaShareAlt />
                    </h4>
                  </span>
                </div>
              </div>
              <div className="liked-by">
                <span>
                  <img src="images/profile4.jpg" />
                </span>
                <span>
                  <img src="images/profile1.jpg" />
                </span>
                <span>
                  <img src="images/profile3.jpg" />
                </span>
                <p>
                  Liked by <b>Yomna Hussein</b> and <b>1333 others</b>
                </p>
              </div>
              <div className="caption">
                <p>
                  <b>Rose Ryan</b>
                  Good luck in your exams fellow colleagues!
                </p>
              </div>
              <div className="text-muted">View all 122 comments</div>
            </div>
          </div>
        </div>

        {/* <!----right-side-----------> */}
        <div className="right-side">
          <h3>Suggested Questions for you</h3>
          <div className="questions">
            <a href="#">
              can you please solve this?
              <h6>this code has a bug and I tried .....</h6>
            </a>
            <a href="#">I need some resources for studying python</a>
            <a href="#">Any advice for newbies??</a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
