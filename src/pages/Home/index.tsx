import styles from "./Home.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CreateItem from "../../components/CreateItem";
import Overview from "../../components/Overview";
// import Search from "../../components/Search";

const Home = () => {
  return (
    <div data-testid="home-component">
        <Header headerText={
              <strong>
                  Welcome To This&nbsp;
                  <strong className='text-pink-500'>
                      Awesome&nbsp;
                  </strong> 
                  App
              </strong>
            }  
            heroText="It doesn't matter if you come from the inner city.
            People who fail in life are people who find lots of excuses. 
            It's never too late for a person to recognize that they have potential in themselves."
            heroTextAuthor="Ben Carson"
        />
      <div className={`${styles.body}`}>
        <section className="flex justify-between items-center">
            {/* form component to create pay */}
            <div>
              <CreateItem />
            </div>
            {/* overview components */}
            <div>
              <Overview />
            </div>
        </section>
        <section>
           {/* table component to show list */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
