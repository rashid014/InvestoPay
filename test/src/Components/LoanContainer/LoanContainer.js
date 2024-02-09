import React from 'react';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const IconCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-md mx-auto text-center mb-4" style={{ width: '220px', background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const LoanContainer = () => {
  const loanData = [
    { id: 1, title: "Personal Loan", description: "Explore flexible options for personal expenses.", icon: <MapsHomeWorkIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 2, title: "Business Loan", description: "Fuel your business growth with our business loan.", icon: <BusinessIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 3, title: "Home Loan", description: "Explore our home loan options.", icon: <HomeIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 4, title: "Loan against Property", description: "Secure your loan against your property.", icon: <LocationCityIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 5, title: "Doctors Loan", description: "Tailored loan options for medical professionals.", icon: <LocalHospitalIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 6, title: "Education Loan", description: "Invest in your future with our education loan.", icon: <SchoolIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 7, title: "Vehicle Loan", description: "Finance your vehicle with our loan solutions.", icon: <DirectionsCarIcon style={{ fontSize: 48, color: 'blue' }} /> },
    { id: 8, title: "Mudra Loan", description: "Government scheme to support small businesses.", icon: <AccountBalanceIcon style={{ fontSize: 48, color: 'blue' }} /> },
  ];

  return (
    <div className="container mx-auto mt-8">
    <div className="flex justify-center md:h-1/4 lg:h-1/3 xl:h-1/2 mt-10">
      <h2 className="text-gray-500 text-3xl font-semibold mb-4">
        Loan Container
      </h2>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8 mt-10">
  {loanData.map((loan) => (
    <div key={loan.id}>
      <IconCard
        icon={loan.icon}
        title={loan.title}
        description={loan.description}
      />
    </div>
  ))}
</div>
  </div>
);
};

export default LoanContainer;
