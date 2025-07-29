const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground mb-4">
            Agent<span className="text-brand-orange">Plus</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Streamlining business workflows through intelligent automation solutions.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <span>hello@agentplus.com</span>
            <span>•</span>
            <span>1-800-AGENTPLUS</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/30 text-sm text-muted-foreground">
            © 2024 AgentPlus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;