export interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
}

export const EMPTY_CUSTOMER: CustomerDetails = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
};

export type CustomerErrorCode = "required" | "phone" | "email" | "pincode";
export type CustomerErrors = Partial<Record<keyof CustomerDetails, CustomerErrorCode>>;

export function validateCustomer(c: CustomerDetails): CustomerErrors {
  const errors: CustomerErrors = {};
  if (!c.name.trim()) errors.name = "required";
  if (!c.phone.trim()) errors.phone = "required";
  else if (!/^[6-9]\d{9}$/.test(c.phone.replace(/[\s-]/g, ""))) errors.phone = "phone";
  if (!c.email.trim()) errors.email = "required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim())) errors.email = "email";
  if (!c.address.trim()) errors.address = "required";
  if (!c.city.trim()) errors.city = "required";
  if (!c.pincode.trim()) errors.pincode = "required";
  else if (!/^\d{6}$/.test(c.pincode.trim())) errors.pincode = "pincode";
  return errors;
}

export function normalizeCustomer(c: CustomerDetails): CustomerDetails {
  return {
    name: c.name.trim(),
    phone: c.phone.replace(/[\s-]/g, ""),
    email: c.email.trim(),
    address: c.address.trim(),
    city: c.city.trim(),
    pincode: c.pincode.trim(),
  };
}
