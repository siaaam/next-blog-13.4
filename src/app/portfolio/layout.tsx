interface PortfolioLayoutProps {
  children: React.ReactNode;
}
const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1 className="text-6xl my-5  font-bold ">Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
