
# UPI QR Code Modal for React

This project provides a reusable and responsive **UPI QR Code Modal** component built using **React**, **MUI**, and **qrcode.react**. It generates a valid UPI payment QR code that users can scan to make payments via apps like GPay, PhonePe, Paytm, BHIM, and others.

![UPI QR Screenshot](https://github.com/ani-003/custom_upi_qr/blob/main/screenshots/Screenshot%202025-05-10%20013935.png)) 

---

## ✨ Features

- 📱 Generates dynamic UPI QR codes using provided details (UPI ID, amount, note, etc.)
- 🖼️ Displays UPI platform logos (GPay, PhonePe, Paytm, BHIM, etc.)
- 🧩 Built with modular React and styled using MUI
- 🧾 Supports real UPI payment string format
- ⚙️ Easy to integrate into any React app

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ani-003/custom_upi_qr.git
cd custom_upi_qr
```

### 2. Install Dependencies
```
npm install qrcode.react
```
### 3. Run the App
```
npm start
```
---


## 🔧 Customization


```
const upi_id = 'your-upi-id@bank';
const amount = 500;
const name = 'Your Name';
const note = 'Purpose of Payment';
const shop_name = 'Your Shop Name';
```
---

## 📁 Folder Structure

```
public/
  image/
    upi/
      gpay.svg
      phonepe.svg
      paytm.svg
      amazonpay.svg
      bhim.svg
      upi.svg
src/
  components/
    UpiQRTemplate.jsx
```
--- 

## 📦 Dependencies

+ [React](https://reactjs.org/)

+ [MUI](https://mui.com/)

+ [qrcode.react](https://www.npmjs.com/package/qrcode.react)

---

## 🙏 Acknowledgements
UPI logos are from their respective official platforms and are used here for demonstration purposes only.
