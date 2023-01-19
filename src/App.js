import './App.css';
import BoxColor from './components/BoxColor';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App container">
      <div className="row iteration">
        <div className="col">
          {/* // ITERATION 1 */}
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div className="col">
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </div>
      <div className="iteration">
        {/* // ITERATION 2 */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className="iteration">
        {/* // ITERATION 3 */}
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <p>refreshing the page will change the value</p>
      </div>
      <div className="iteration row">
        {/* // ITERATION 4 */}
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={4} g={10} b={200} />
      </div>
      <div className="iteration row">
        {/* // ITERATION 5 */}
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div className="iteration">
        {/* // ITERATION 6 */}
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>3.9</Rating>
        <Rating>5</Rating>
      </div>
      <div className="iteration">
        {/* // ITERATION 7 */}
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div className="iteration">
        {/* // ITERATION 8 */}
        <LikeButton />
      </div>
      <div className="iteration">
        {/* // ITERATION 9 */}
        <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      </div>
      <div className="iteration">
        {/* // ITERATION 10 */}
        <Dice />
      </div>
      <div className="iteration">
        {/* // ITERATION 11 */}
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="iteration">
        {/* // ITERATION 12 */}
        <NumbersTable limit={12} />
      </div>
    </div>
  );
}

export default App;
