export default function PrivacyPolicy() {
    return (

        <div className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: April 25, 2026
            </p>

            <div className="mt-8 space-y-8 text-sm leading-6">

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">1. Introduction</h2>
                    <p className="text-muted-foreground">
                        This Privacy Policy explains how we collect, use, and protect information when you use our website.
                    </p>
                    <p className="text-muted-foreground">
                        By using this site, you agree to this policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-medium">2. Information We Collect</h2>

                    <div className="space-y-2">
                        <h3 className="font-medium">Analytics Data</h3>
                        <p className="text-muted-foreground">
                            We use Vercel Web Analytics and Vercel Speed Insights to collect anonymous usage data such as page views, device type, and referrers. This data does not identify individual users.
                            For more details, see Vercel’s official privacy documentation: {" "}
                            <a
                                href="https://vercel.com/docs/analytics/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4"
                            >
                                https://vercel.com/docs/analytics/privacy-policy
                            </a>.
                        </p>
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">3. How We Use Information</h2>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Operate and maintain the site</li>
                        <li>Improve performance and usability</li>
                        <li>Monitor usage and fix issues</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">4. Third-Party Services</h2>
                    <p className="text-muted-foreground">
                        We use Vercel for hosting and analytics. These services may process data according to their own policies.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">5. Cookies</h2>
                    <p className="text-muted-foreground">
                        We do not use cookies for analytics. This may change if additional tools are added.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">6. Data Security</h2>
                    <p className="text-muted-foreground">
                        We take reasonable steps to protect your data, but no system is completely secure.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">7. Your Rights</h2>
                    <p className="text-muted-foreground">
                        Depending on your location, you may have rights to access, update, or delete your data.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">8. Changes</h2>
                    <p className="text-muted-foreground">
                        We may update this policy from time to time.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">9. Contact</h2>
                    <p className="text-muted-foreground">
                        Email: {" "}
                        <a href="mailto:your-email@example.com" className="underline underline-offset-4">
                            adolfogante@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    )
}
