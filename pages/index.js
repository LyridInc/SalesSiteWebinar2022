import { CssBaseline, } from '@mui/material';
import Calculator_Page from "./page_components/Calculator/calculator_page";
import Header_Banner from "./page_components/Header/header_banner";

function HomePage({ product_data, solution_data, hardware_data, }) {
  
  return (
    <CssBaseline>
      <Header_Banner></Header_Banner>
      <Calculator_Page product_data={product_data} solution_data={solution_data} hardware_data={hardware_data}/>
    </CssBaseline>
  )
}
  
export default HomePage;

// This gets called on every request
export async function getServerSideProps() {

  //XC-Token is the token you are able to create in [Team & Auth] tab.
  //XC-Auth is previously used for example, and not recommended to be used for future implementations
  //In the future the tokens are able to be set as a global variable to be reused throughout the project.
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'xc-token': '############################'
    }
  };
  
  // The current project is setup to query these three individual tables.
  // The in case you would like to create your own database, these query link MUST be changed.
  const product_res = await fetch('############################', options);
  const solution_res = await fetch('############################', options);
  const hardware_res = await fetch('############################', options);

  const product_data = await product_res.json();
  const solution_data = await solution_res.json();
  const hardware_data = await hardware_res.json();

  // Pass data to the page via props
  return { 
    props: { 
      product_data,
      solution_data,
      hardware_data,
     } 
  }
}