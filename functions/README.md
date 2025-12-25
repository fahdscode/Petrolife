# Firebase Cloud Functions

## Deploy the createCompanyUserFunction

### Prerequisites

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Install function dependencies:
```bash
cd functions
npm install
```

### Build and Deploy

1. Build the TypeScript code:
```bash
npm run build
```

2. Deploy the function:
```bash
firebase deploy --only functions:createCompanyUserFunction
```

Or deploy all functions:
```bash
firebase deploy --only functions
```

### Set Public Access (IAM Permissions)

After deployment, you need to make the function publicly accessible:

1. Using gcloud CLI:
```bash
gcloud functions add-iam-policy-binding createCompanyUserFunction \
  --region=us-central1 \
  --member=allUsers \
  --role=roles/cloudfunctions.invoker \
  --project=car-station-6393f
```

2. Or via Firebase Console:
   - Go to Firebase Console → Functions
   - Click on `createCompanyUserFunction`
   - Go to "Permissions" tab
   - Click "Add Member"
   - Add `allUsers` with role `Cloud Functions Invoker`

### Function URL

After deployment, the function URL will be:
```
https://us-central1-car-station-6393f.cloudfunctions.net/createCompanyUserFunction
```

This URL is automatically configured in the client code for the landing page registration.

### Testing

You can test the function using curl:

```bash
curl -X POST https://us-central1-car-station-6393f.cloudfunctions.net/createCompanyUserFunction \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test Company",
    "brandName": "Test Brand",
    "phoneNumber": "1234567890",
    "address": "123 Test St",
    "city": "Test City"
  }'
```

