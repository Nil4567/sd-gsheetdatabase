# Siddhivinayak Digital - OM Namah Shivay

## 🙏 Order Management Dashboard

A complete web-based order management system for Siddhivinayak Digital services with integrated multi-timezone clock.

## ✨ Features

### 📋 Order Management
- Create new orders with customer details
- Track job descriptions and amounts
- Calculate pending amounts automatically
- View all orders in a comprehensive table
- Real-time statistics dashboard

### ⏰ Live Clock
- Real-time multi-timezone display
- IST, UTC, EST, PST, GST, SGT timezones
- 24-hour and 12-hour format options
- Continuously updated every second

### 💾 Data Persistence
- All orders saved to browser localStorage
- No backend required
- Data persists across sessions
- Export-ready format

### 🎨 Professional UI
- Clean, modern design
- Responsive layout (desktop & mobile)
- Blue theme (Siddhivinayak branding)
- Status and payment tracking

## 🚀 Quick Start

### 1. View Locally
```bash
git clone https://github.com/Nil4567/sd-gsheetdatabase.git
cd sd-gsheetdatabase
git checkout feature/digital-clock
open index.html
```

### 2. Online Access
Visit: `https://nil4567.github.io/sd-gsheetdatabase/`

## 📁 File Structure

```
├── index.html              # Main dashboard
├── clock/
│   ├── clock.js           # Clock library
│   └── index.html         # Clock demo
└── README.md              # Documentation
```

## 🎯 How to Use

### Create an Order
1. Fill in Customer Name (required)
2. Enter Customer Contact number
3. Add Job Description (required)
4. Enter Total Amount
5. Enter Advance Amount (Pending auto-calculates)
6. Select Order Date
7. Click "Submit Order"

### View Orders
- All orders appear in the table below
- See statistics: Total Orders, Revenue, Advance, Pending
- Orders stay saved in your browser

## 📊 Order Fields

| Field | Type | Required | Auto-Calculate |
|-------|------|----------|-----------------|
| Customer Name | Text | ✅ | ❌ |
| Customer Contact | Tel | ❌ | ❌ |
| Job Description | Text | ✅ | ❌ |
| Total Amount | Number | ❌ | ❌ |
| Advance Amount | Number | ❌ | ❌ |
| Pending Amount | Number | ❌ | ✅ |
| Order Date | Date | ❌ | ✅ |

## 💾 Data Storage

- Orders stored in browser LocalStorage
- No server required
- Data persists until cleared
- Can be exported as JSON

## 🔐 Privacy

- ✅ No data sent to servers
- ✅ All data stored locally
- ✅ No login required
- ✅ Browser-based processing

## 🚀 Deployment

### GitHub Pages Setup
1. Go to: https://github.com/Nil4567/sd-gsheetdatabase/settings/pages
2. Select Source: `feature/digital-clock` branch
3. Wait for deployment (1-2 minutes)
4. Access at: https://nil4567.github.io/sd-gsheetdatabase/

---

**Created**: 2026-06-01  
**Status**: ✅ Production Ready

**🙏 Jai Siddhivinayak! 🙏**
