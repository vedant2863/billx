# Frontend Routes and Their Purpose

## 1. Authentication and User Management
### `/login`
- **Purpose**: Allow users to log in to their account.
- **Features**:
  - Form for entering email and password.
  - Login button with form validation.
  - Forgot password link for recovery.

### `/register`
- **Purpose**: Enable new users to create an account.
- **Features**:
  - Form to input name, email, password, and confirm password.
  - Registration validation and error handling.

### `/forgot-password`
- **Purpose**: Initiate password reset.
- **Features**:
  - Input email to receive password reset instructions.

### `/reset-password`
- **Purpose**: Allow users to reset their password.
- **Features**:
  - Form for entering new password and confirmation.
  - Token-based authentication for password reset.

---

## 2. Dashboard
### `/dashboard`
- **Purpose**: Provide an overview of the user’s activity and statistics.
- **Features**:
  - Display total invoices, paid/unpaid/overdue status.
  - Shortcuts to create a new invoice or manage clients.
  - Recent invoices list.

---

## 3. Invoice Management
### `/invoices`
- **Purpose**: View all invoices.
- **Features**:
  - Table listing all invoices with:
    - Invoice number, client, amount, status, and due date.
  - Filters for status (Paid, Unpaid, Overdue) and date range.
  - Button to create a new invoice.

### `/invoices/create`
- **Purpose**: Create a new invoice.
- **Features**:
  - Form to enter:
    - **Basic Details**: Invoice number, issue date, due date, freelancer and client details.
    - **Services/Items**: Description, quantities, rates, subtotals.
    - **Payment Information**: Taxes, discounts, total, and payment methods.
    - **Branding**: Add logo and optional notes.
  - Preview and save buttons.

### `/invoices/:id`
- **Purpose**: View a specific invoice.
- **Features**:
  - Display all invoice details:
    - Freelancer and client details.
    - List of services with quantities, rates, and subtotals.
    - Payment information, taxes, discounts, and total.
  - Status tracking (Paid, Unpaid, Overdue).
  - Action buttons:
    - Mark as paid.
    - Send invoice via email.
    - Download as PDF.
    - Edit invoice.

### `/invoices/:id/edit`
- **Purpose**: Edit an existing invoice.
- **Features**:
  - Pre-filled form to update invoice details.
  - Update branding, services, or payment details.
  - Save changes button.

---

## 4. Client Management
### `/clients`
- **Purpose**: Manage clients.
- **Features**:
  - Table of clients showing name, company, email, and total invoices.
  - Search and filter functionality.
  - Add new client button.

### `/clients/create`
- **Purpose**: Add a new client.
- **Features**:
  - Form to input:
    - Client name, company name, address, email, and phone.
  - Save button to add the client.

### `/clients/:id`
- **Purpose**: View a specific client’s details.
- **Features**:
  - Display:
    - Client information.
    - List of invoices associated with the client.
  - Buttons to edit or delete client.

### `/clients/:id/edit`
- **Purpose**: Edit client details.
- **Features**:
  - Pre-filled form to update client information.
  - Save changes button.

---

## 5. Recurring Invoices
### `/recurring-invoices`
- **Purpose**: Manage recurring invoices.
- **Features**:
  - Table listing all recurring invoice templates with:
    - Client, frequency, next invoice date, and status.
  - Filters for active or inactive templates.
  - Create new recurring invoice button.

### `/recurring-invoices/create`
- **Purpose**: Create a new recurring invoice.
- **Features**:
  - Form to:
    - Select client.
    - Add services, taxes, and payment terms.
    - Set recurrence frequency (e.g., weekly, monthly).
  - Save button.

### `/recurring-invoices/:id`
- **Purpose**: View a recurring invoice template.
- **Features**:
  - Display details of the template:
    - Services, client, frequency, and next invoice date.
  - Action buttons to:
    - Edit template.
    - Deactivate recurring invoice.

### `/recurring-invoices/:id/edit`
- **Purpose**: Edit a recurring invoice template.
- **Features**:
  - Pre-filled form to update template details.
  - Save changes button.

---

## 6. Payment Management
### `/payments`
- **Purpose**: Manage payments for invoices.
- **Features**:
  - Table of payments showing:
    - Payment ID, invoice number, amount paid, date, and payment method.
  - Filters for date range or payment methods.

### `/payments/:id`
- **Purpose**: View a specific payment.
- **Features**:
  - Display payment details:
    - Transaction ID, amount, date, and method.
  - Associated invoice details.
  - Option to refund or delete payment.

---

## 7. Settings
### `/settings`
- **Purpose**: Manage user-specific settings.
- **Features**:
  - Update:
    - Personal details (name, phone, address, tax ID).
    - Branding (logo, default notes).
    - Invoice preferences (default currency, taxes, late fees).
  - Save changes button.

---

## 8. Additional Routes
### `/export`
- **Purpose**: Export invoices as PDFs.
- **Features**:
  - Options to select:
    - Individual invoice or bulk export.
    - Export format (PDF or email).

### `/time-tracking`
- **Purpose**: Integrate time tracking tools.
- **Features**:
  - Sync with tools like Toggl or Harvest.
  - Auto-generate invoice items based on logged time.

### `/mobile`
- **Purpose**: Mobile-specific UI for creating and sending invoices.
- **Features**:
  - Simplified forms for on-the-go use.
  - Access to key features like invoice creation and client management.

---

# Summary of Routes and Their Actions

| Route                   | Purpose                               | Actions & Features                                 |
|-------------------------|---------------------------------------|---------------------------------------------------|
| `/dashboard`            | Overview of activity                 | View stats, shortcuts, and recent invoices.       |
| `/invoices`             | Manage all invoices                  | List, create, view, and edit invoices.            |
| `/clients`              | Manage clients                       | Add, view, and update client details.             |
| `/recurring-invoices`   | Automate recurring invoices          | Create, view, and deactivate templates.           |
| `/payments`             | Manage payments                      | List and view payment details.                    |
| `/settings`             | Customize preferences                | Update branding, currency, taxes, and notes.      |
| `/export`               | Export invoices                      | Save or email invoices in various formats.        |
| `/time-tracking`        | Time tracking integration            | Sync and generate invoices from logged time.      |
| `/mobile`               | Mobile-specific UI                   | Simplified tools for mobile invoice management.   |
