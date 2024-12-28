User Management Routes 
POST /api/v1/users/register: Register a new user. 
POST /api/v1/users/login: Authenticate and login. 
POST /api/v1/users/logout: Logout the current user. 
GET /api/v1/users/me: Get the logged-in user's profile. 
PATCH /api/v1/users/update-profile: Update the logged-in user's profile. 
PATCH /api/v1/users/update-password: Change the user's password. 
GET /api/v1/users: Get a list of all users (Admin only). 
GET /api/v1/users/:id: Get details of a specific user (Admin only). 
DELETE /api/v1/users/:id: Delete a user (Admin only).

Admin Dashboard Routes 
GET /api/v1/admin/overview: Get an overview of application stats (e.g., users, invoices, payments). GET /api/v1/admin/logs: Get system or activity logs.
Role-Based Access Control Routes 
PATCH /api/v1/users/:id/assign-role: Assign roles to a user (Admin only). 
GET /api/v1/roles: Get a list of all roles. GET /api/v1/roles/:role/users: Get users assigned to a specific role.

Client/Customer Portal Routes 
GET /api/v1/clients: Get a list of clients/customers. 
POST /api/v1/clients: Add a new client. 
GET /api/v1/clients/:id: Get details of a specific client. PATCH /api/v1/clients/:id: Update client information. 
DELETE /api/v1/clients/:id: Delete a client.

Invoice Management Routes 
POST /api/v1/invoices: Create a new invoice. 
GET /api/v1/invoices: Get a list of all invoices. 
GET /api/v1/invoices/:id: Get details of a specific invoice. 
PATCH /api/v1/invoices/:id: Update an invoice. 
DELETE /api/v1/invoices/:id: Delete an invoice.
PDF Generation Routes GET /api/v1/invoices/:id/pdf: Generate a PDF of a specific invoice. 
POST /api/v1/invoices/:id/customize-pdf: Customize a PDF template for an invoice.
Email Integration Routes 
POST /api/v1/emails/send-invoice/:id: Send an invoice via email. 
GET /api/v1/emails/templates: Get predefined email templates. 
POST /api/v1/emails/templates: Add a new email template. 
PATCH /api/v1/emails/templates/:id: Update an email template. 
DELETE /api/v1/emails/templates/:id: Delete an email template.

Payment Options Routes POST /api/v1/payments: Record a manual payment. GET /api/v1/payments: Get a list of all payments. GET /api/v1/payments/:id: Get details of a specific payment. POST /api/v1/payments/:id/online: Process an online payment. GET /api/v1/payments/status/:id: Get the payment status of an invoice.
Analytics and Reporting Routes GET /api/v1/reports/payments: Get payment reports. GET /api/v1/reports/invoices/outstanding: Get outstanding invoices. GET /api/v1/reports/taxes: Get tax reports. GET /api/v1/reports/download: Download reports in PDF/Excel.
Security Routes POST /api/v1/auth/enable-2fa: Enable two-factor authentication. POST /api/v1/auth/verify-2fa: Verify two-factor authentication code. POST /api/v1/auth/oauth: OAuth login.
Localization Routes GET /api/v1/localization/languages: Get available languages. PATCH /api/v1/localization/update: Update localization settings (Admin only).
Notifications Routes POST /api/v1/notifications/send: Send a notification (Admin only). GET /api/v1/notifications: Get all notifications. PATCH /api/v1/notifications/:id: Mark a notification as read. DELETE /api/v1/notifications/:id: Delete a notification.
Integration Routes POST /api/v1/integration/sync: Sync data with external systems. GET /api/v1/integration/tools: Get a list of supported accounting tools.