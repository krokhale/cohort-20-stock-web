import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        <div className={'flex border bg-gray-200 w-full border-b-2 border-gray-900 p-6'}>
            <h1 className={'text-center w-full text-2xl font-semibold'}>Paper Trader</h1>
        </div>


        <div className={'flex w-full h-96'}>
            <div className={'bg-gray-300 w-3/5 h-full border-r-2 border-gray-900'}>

            </div>

            <div className={'bg-gray-500 w-2/5 h-full'}>

            </div>

        </div>



    </>
  );
}

export default App;
