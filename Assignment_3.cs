using System;

namespace ConsoleApp1
{
    class Assignment_3
    {
        static void Main()
        {
           
            IDiscountService discountService = new DiscountService();
            Customer customer = new Customer
            {
                CustomerId = 1,
                FirstName = "John",
                LastName = "Doe",
                Email = "john.doe@example.com"
            };

            CustomerType customerType = CustomerType.Gold;
            RegisterCust registerCust = new RegisterCust(discountService);
            registerCust.Register(customer, customerType);

            OrderProcessor orderProcessor = new OrderProcessor(discountService);
            orderProcessor.ProcessOrder(customer, customerType);
        }
    }

    public enum CustomerType
    {
        Bronze,
        Silver,
        Gold,
        Platinum
    }

    public interface ICustomer
    {
        void SaveCustomer();
    }

    public interface IDiscountService
    {
        int GetDiscountPercentage(CustomerType type);
    }

    public interface IOrderProcessor
    {
        void ProcessOrder(Customer cust, CustomerType type);
    }

    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

    public class DiscountService : IDiscountService
    {
        public int GetDiscountPercentage(CustomerType type)
        {
            switch (type)
            {
                case CustomerType.Bronze:
                    return 15;
                case CustomerType.Silver:
                    return 20;
                case CustomerType.Gold:
                    return 25;
                case CustomerType.Platinum:
                    return 27;
                default:
                    return 12;
            }
        }
    }

    public class RegisterCust
    {
        private readonly IDiscountService _discountService;

        public RegisterCust(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        public void Register(Customer cust, CustomerType type)
        {
            try
            {
                int discount = _discountService.GetDiscountPercentage(type);
                Console.WriteLine($"Discount applied: {discount}%");
                SaveCustomer();
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
            }
        }

        public void SaveCustomer()
        {
            Console.WriteLine("Customer saved successfully.");
        }
    }

    public class OrderProcessor : IOrderProcessor
    {
        private readonly IDiscountService _discountService;

        public OrderProcessor(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        public void ProcessOrder(Customer cust, CustomerType type)
        {
            int discount = _discountService.GetDiscountPercentage(type);
            Console.WriteLine($"Processing order with {discount}% discount.");
            Console.WriteLine("Order Placed Successfully");
        }
    }

    public class Logger
    {
        public static void LogError(string message)
        {
            Console.WriteLine($"Log Error: {message}");
        }
    }

    public class Lead
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public void CaptureLead()
        {
            Console.WriteLine("Lead captured successfully.");
        }
    }
}