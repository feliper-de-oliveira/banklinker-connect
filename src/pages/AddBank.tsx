
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AddBank = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Bank connection initiated",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Connect a New Bank
          </h1>
          <p className="text-muted-foreground mt-2">
            Enter your bank's API credentials
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-4 bg-surface rounded-lg flex items-center space-x-4 mb-6">
              <Building2 className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Bank Details</h3>
                <p className="text-sm text-muted-foreground">
                  Provide your bank's API integration details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  Bank Name
                </label>
                <Input placeholder="Enter bank name" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  API Key
                </label>
                <Input type="password" placeholder="Enter API key" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  API Secret
                </label>
                <Input type="password" placeholder="Enter API secret" required />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover transition-colors"
            >
              Connect Bank
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddBank;
