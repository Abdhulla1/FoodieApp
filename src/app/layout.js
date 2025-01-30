import './globals.css';
import Mainheader from '../components/mainheader/main-header';
export const metadata = {
  title: 'Foodie App',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Mainheader/>
        {children}
      </body>
    </html>
  );
}
