
import { QRCodeSVG } from 'qrcode.react';
import {  Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '12px',
  textAlign: 'center',

};

const UPIQRModal = ({ open, onClose }) => {
  const upi_id = 'user@example';
  const amount = 500;
  const name = 'John Doe';
  const note = 'Payment through UPI';
  const shop_name = 'Leftover Lifeline';

  const upiUrl = `upi://pay?pa=${upi_id}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;

  return (
    // <Modal open={open} onClose={onClose}>
      <Box sx={style}>
      <div className="text-center" style={{width: '100%'}}>
        <h2>{shop_name}</h2>
      </div>
<br/> 
      
        
        <QRCodeSVG value={upiUrl} size={200} /> <br /> <h6> {upi_id}</h6> <br /><h5>Scan & Pay via UPI</h5>
          <div className="d-flex justify-content-around mt-4">
          <img src="/image/upi/bhim.svg" alt="BHIM" style={{ height: 35 }} />
          <img src="/image/upi/upi.svg" alt="UPI" style={{ height: 35 }} />
           </div>
         
        <div className="d-flex justify-content-around  mt-4">
          <img src="/image/upi/gpay.svg" alt="GPay" style={{ height: 22 }} />
          <img src="/image/upi/phonepe.svg" alt="PhonePe" style={{ height: 22 }} />
          <img src="/image/upi/paytm.svg" alt="Paytm" style={{ height: 22 }} />
          <img src="/image/upi/amazonpay.svg" alt="AmazonPay" style={{ height: 22 }} />
        
        </div>
       
      
      </Box>
    // </Modal>
  );
};

export default UPIQRModal;
