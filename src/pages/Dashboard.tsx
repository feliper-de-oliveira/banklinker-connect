
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Building2, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const banks = [
    { id: 1, name: "Bank A", status: "connected" },
    { id: 2, name: "Bank B", status: "disconnected" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bank Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage your bank integrations
            </p>
          </div>
          <Button
            onClick={() => navigate("/add-bank")}
            className="bg-primary hover:bg-primary-hover transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Bank
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banks.map((bank) => (
            <Card
              key={bank.id}
              className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-surface rounded-full">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{bank.name}</h3>
                  <div className="flex items-center mt-1">
                    {bank.status === "connected" ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-success-DEFAULT mr-1" />
                        <span className="text-sm text-success-DEFAULT">
                          Connected
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-destructive mr-1" />
                        <span className="text-sm text-destructive">
                          Disconnected
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="ml-auto hover:bg-surface transition-colors"
                >
                  Manage
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
