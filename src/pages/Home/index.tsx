import styles from "./Home.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CreateItem from "../../components/CreateItem";
import Overview from "../../components/Overview";
import ItemList from "../../components/ItemList";
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
      <div className={`${styles.body} px-20 pt-20`}>
        <section className="flex justify-between mb-20">
            {/* form component to create pay */}
            <div className="w-1/2">
              <CreateItem />
            </div>
            {/* overview components */}
            <div className="w-1/2 p-10">
              <Overview />
            </div>
        </section>
        <section>
           {/* table component to show list */}
           <ItemList />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
