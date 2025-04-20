using ConsoleApp1;
using System;
using System.Collections.Generic;
using System.Linq;
namespace ConsoleApp1
{
    class Menu
    {
        HashSet<string> categories = new HashSet<string>();

        List<string> list = new List<string>();

        public void AddFoodItem()
        {

            Console.WriteLine("enter add food item:");
            string input = Console.ReadLine();
            list.Add(input);
            Console.WriteLine("enter unique item : ");
            string uniquec = Console.ReadLine();
            categories.Add(uniquec);
        }


        public void showMenu()
        {
            foreach (string item in list)
            {
                Console.WriteLine("list of all food Item: "+item);

            }

            foreach (string pricecategories in categories)
            {  
                Console.WriteLine("list of price & categories: "+ pricecategories);
            }
        }

    }


    public class Orders
    {


        public void orders()
        {
            Console.WriteLine("Enter order id: ");
            int orderId = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter order Item: ");
            string orderItem = Console.ReadLine();

            Dictionary<int, List<string>> dict = new Dictionary<int, List<string>>();

          
            if (!dict.ContainsKey(orderId))
            {
                dict[orderId] = new List<string>();
            }

            
            dict[orderId].Add(orderItem);

            // Display the order details
            Console.WriteLine("Order ID: " + orderId + " , " + string.Join(", ", dict[orderId]));
        }



    }

    interface IpendingOrder
    {
        void pendingOrder(int orderId);
    }

    interface Icompleted
    {
        void completeOrder(int orderId);
    }

    class PendingDeliveries : IpendingOrder
    {
        public void pendingOrder(int orderId)
        {
            Queue<int> queue = new Queue<int>();
            queue.Enqueue(orderId);
            Console.WriteLine($"Order {orderId} is pending.");

        }
    }

    class CompletedOrder : Icompleted
    {
        public void completeOrder(int orderId)
        {
            Stack<int> stack = new Stack<int>();
          

            stack.Push(orderId);
            Console.WriteLine($"Order {orderId} has been delivered.");


        }

    }

    class CollectionsAssign
    {
        static void Main()
        {
           

         
            Menu m = new Menu();
            m.AddFoodItem();
            m.AddFoodItem();
            m.showMenu();

          
            Orders order = new Orders();
            order.orders();
            order.orders();



            PendingDeliveries pendingOrder = new PendingDeliveries();
            pendingOrder.pendingOrder(1);
            pendingOrder.pendingOrder(2);

            CompletedOrder deliver = new CompletedOrder();
            deliver.completeOrder(1);



        }
    }
}

