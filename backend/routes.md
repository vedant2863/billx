# Backend Routes and Their Purpose

## 1. Authentication and User Management
### `POST /api/auth/register`
- **Purpose**: Register a new user.
- **Actions**:
  - Accept user details (name, email, password).
  - Hash the password and save the user in the database.
  - Return success message or error.

### `POST /api/auth/login`
- **Purpose**: Authenticate a user and provide a token.
- **Actions**:
  - Validate email and password.
  - Generate a JWT token for authorized access.
  - Return the token and user details.

### `POST /api/auth/logout`
- **Purpose**: Log out the user.
- **Actions**:
  - Invalidate the user's token on the server.
  - Return success message.

### `POST /api/auth/forgot-password`
- **Purpose**: Send password reset instructions.
- **Actions**:
  - Accept email.
  - Generate and send a reset token via email.

### `POST /api/auth/reset-password`
- **Purpose**: Reset the user’s password.
- **Actions**:
  - Verify reset token.
  - Update the user’s password in the database.

---

## 2. Dashboard
### `GET /api/dashboard`
- **Purpose**: Fetch overview statistics for the user.
- **Actions**:
  - Return data for:
    - Total invoices.
    - Count of paid, unpaid, and overdue invoices.
    - Recent invoices list.

---

## 3. Invoice Management
### `GET /api/invoices`
- **Purpose**: Retrieve all invoices for a user.
- **Actions**:
  - Query the database for invoices associated with the logged-in user.
  - Support filters for status and date range.

### `POST /api/invoices`
- **Purpose**: Create a new invoice.
- **Actions**:
  - Accept invoice details:
    - Freelancer/client details, services, payment info.
  - Save the invoice to the database.
  - Return the created invoice.

### `GET /api/invoices/:id`
- **Purpose**: Retrieve a specific invoice.
- **Actions**:
  - Fetch invoice details by ID.
  - Verify the invoice belongs to the logged-in user.

### `PUT /api/invoices/:id`
- **Purpose**: Update an existing invoice.
- **Actions**:
  - Accept updated invoice details.
  - Validate and update the invoice in the database.

### `DELETE /api/invoices/:id`
- **Purpose**: Delete an invoice.
- **Actions**:
  - Remove the invoice by ID from the database.

---

## 4. Client Management
### `GET /api/clients`
- **Purpose**: Retrieve all clients for a user.
- **Actions**:
  - Query the database for all clients associated with the user.
  - Support search and filters.

### `POST /api/clients`
- **Purpose**: Add a new client.
- **Actions**:
  - Accept client details (name, company, address, etc.).
  - Save the client in the database.

### `GET /api/clients/:id`
- **Purpose**: Retrieve details of a specific client.
- **Actions**:
  - Fetch client details by ID.
  - Include associated invoices.

### `PUT /api/clients/:id`
- **Purpose**: Update a client’s information.
- **Actions**:
  - Accept updated details.
  - Validate and update the client in the database.

### `DELETE /api/clients/:id`
- **Purpose**: Delete a client.
- **Actions**:
  - Remove the client by ID from the database.

---

## 5. Recurring Invoices
### `GET /api/recurring-invoices`
- **Purpose**: Retrieve recurring invoice templates.
- **Actions**:
  - Fetch all recurring templates for the user.

### `POST /api/recurring-invoices`
- **Purpose**: Create a new recurring invoice template.
- **Actions**:
  - Accept template details (client, frequency, services, etc.).
  - Save the template to the database.

### `GET /api/recurring-invoices/:id`
- **Purpose**: Retrieve a specific recurring invoice template.
- **Actions**:
  - Fetch template details by ID.

### `PUT /api/recurring-invoices/:id`
- **Purpose**: Update a recurring invoice template.
- **Actions**:
  - Accept updated template details.
  - Validate and update the template.

### `DELETE /api/recurring-invoices/:id`
- **Purpose**: Deactivate a recurring invoice template.
- **Actions**:
  - Mark the template as inactive.

---

## 6. Payment Management
### `GET /api/payments`
- **Purpose**: Retrieve all payments.
- **Actions**:
  - Fetch all payments for the user.
  - Support filters for date range and methods.

### `POST /api/payments`
- **Purpose**: Record a payment for an invoice.
- **Actions**:
  - Accept payment details (invoice ID, amount, method).
  - Update invoice status to "Paid" if applicable.
  - Save payment to the database.

### `GET /api/payments/:id`
- **Purpose**: Retrieve a specific payment.
- **Actions**:
  - Fetch payment details by ID.

### `DELETE /api/payments/:id`
- **Purpose**: Delete a payment.
- **Actions**:
  - Remove the payment and update the associated invoice status.

---

## 7. Settings
### `GET /api/settings`
- **Purpose**: Retrieve user settings.
- **Actions**:
  - Return branding, preferences, and tax information.

### `PUT /api/settings`
- **Purpose**: Update user settings.
- **Actions**:
  - Accept updated settings and save them in the database.

---

## 8. Additional Features
### `POST /api/export`
- **Purpose**: Export invoices as PDF.
- **Actions**:
  - Accept invoice IDs for export.
  - Generate PDF and return download link.

### `POST /api/integrations/time-tracking`
- **Purpose**: Sync time-tracking data.
- **Actions**:
  - Accept time log details.
  - Auto-generate invoice items based on the data.

### `POST /api/integrations/mobile`
- **Purpose**: Handle mobile-specific operations.
- **Actions**:
  - Provide simplified endpoints for mobile app integration.
