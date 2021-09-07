using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")]
        PENDING,

        [EnumMember(Value = "Payment Recevied")]
        PAYMENTRECEVIED,
        
        [EnumMember(Value = "Payment Failed")]
        PAYMENTFAILED
        // Shipped,
        // Complete
    }
}