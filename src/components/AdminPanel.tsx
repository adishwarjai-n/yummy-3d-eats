
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AdminPanelProps {
  onBackToWebsite: () => void;
}

const AdminPanel = ({ onBackToWebsite }: AdminPanelProps) => {
  const [orders] = useState([
    { id: '#1234', customer: 'John Doe', items: 'Pizza Margherita, Cola', total: 21.98, status: 'preparing', time: '5 min ago' },
    { id: '#1235', customer: 'Sarah Wilson', items: 'Truffle Burger, Fries', total: 28.99, status: 'ready', time: '12 min ago' },
    { id: '#1236', customer: 'Mike Johnson', items: 'Ramen Bowl, Gyoza', total: 24.98, status: 'delivered', time: '25 min ago' }
  ]);

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 18.99, category: 'Pizza', status: 'active' },
    { id: 2, name: 'Truffle Burger', price: 24.99, category: 'Burgers', status: 'active' },
    { id: 3, name: 'Dragon Roll', price: 16.99, category: 'Asian', status: 'inactive' }
  ]);

  const stats = [
    { title: 'Today\'s Orders', value: '156', trend: '+12%', icon: '📋' },
    { title: 'Revenue', value: '$3,420', trend: '+8%', icon: '💰' },
    { title: 'Active Orders', value: '23', trend: '+5%', icon: '🔥' },
    { title: 'Customers', value: '1,245', trend: '+15%', icon: '👥' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing': return 'bg-yellow-500';
      case 'ready': return 'bg-green-500';
      case 'delivered': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Manage your restaurant operations</p>
        </div>
        <Button 
          onClick={onBackToWebsite}
          variant="outline"
          className="border-orange-300 text-orange-600 hover:bg-orange-50"
        >
          ← Back to Website
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-1">{stat.trend}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 max-w-md">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📋 Recent Orders
                <Badge variant="secondary">{orders.length} active</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold">{order.id}</span>
                        <Badge className={`${getStatusColor(order.status)} text-white`}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">${order.total}</p>
                      <p className="text-sm text-gray-500">{order.time}</p>
                    </div>
                    <div className="ml-4 space-x-2">
                      {order.status === 'preparing' && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Mark Ready
                        </Button>
                      )}
                      {order.status === 'ready' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Mark Delivered
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Menu Tab */}
        <TabsContent value="menu">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  🍽️ Menu Management
                </CardTitle>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  + Add New Item
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-lg">${item.price}</span>
                      <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">
                          {item.status === 'active' ? 'Disable' : 'Enable'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>📊 Sales Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Today</span>
                    <span className="font-semibold">$3,420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>This Week</span>
                    <span className="font-semibold">$18,650</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>This Month</span>
                    <span className="font-semibold">$78,240</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🍕 Popular Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Margherita Pizza</span>
                    <span className="font-semibold">156 orders</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Truffle Burger</span>
                    <span className="font-semibold">134 orders</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ramen Bowl</span>
                    <span className="font-semibold">98 orders</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>⚙️ Restaurant Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Restaurant Name</label>
                <Input defaultValue="FoodieHub" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Fee</label>
                <Input defaultValue="$2.99" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minimum Order</label>
                <Input defaultValue="$15.00" />
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
