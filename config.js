const config = {
    SUPABASE_URL: 'https://ngtlkwuuoojbhjjeawag.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ndGxrd3V1b29qYmhqamVhd2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMTk5NjYsImV4cCI6MjA1ODg5NTk2Nn0.f-A8AVuAFar1xUszdbn9oGknrD-B1M8hGHHTDJzQG_w',

    // Used in success copy / future WhatsApp deep links (digits only, with country code)
    ADMIN_WHATSAPP: '919999999999',
    SUPPORT_EMAIL: 'support@messagehunt.app',

    // Optional: Zapier / Make / Slack incoming webhook URL to ping you on new requests
    NOTIFY_WEBHOOK_URL: '',

    // Referral code → discount percent (admin still confirms final price when contacting)
    REFERRAL_CODES: {
        WELCOME10: 10,
        PARTNER15: 15,
        HUNT20: 20
    }
};

if (typeof window !== 'undefined') {
    window.APP_CONFIG = config;
}
