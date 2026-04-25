export default function Terms() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Last updated: April 25, 2026
            </p>

            <div className="mt-8 space-y-8 text-sm leading-6">

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                        By accessing or using this website, you agree to be bound by these Terms of Use.
                        If you do not agree, you should not use the site.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">2. Use of the Service</h2>
                    <p className="text-muted-foreground">
                        You agree to use this website only for lawful purposes and in a way that does not
                        harm, disrupt, or interfere with the service or other users.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">3. Accounts</h2>
                    <p className="text-muted-foreground">
                        If you create an account, you are responsible for maintaining the security of your
                        credentials and for all activity under your account.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">4. Open Source</h2>
                    <p className="text-muted-foreground">
                        This project is open source and available on GitHub:{" "}
                        <a href="https://github.com/adoante/qtbaking" className="underline underline-offset-4">
                            Website Code
                        </a>,{" "}
                        <a href="https://github.com/adoante/qtbaking" className="underline underline-offset-4">
                            API Code
                        </a> . Use of the source code is governed by the applicable open source license.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">5. Disclaimer</h2>
                    <p className="text-muted-foreground">
                        This website is provided {`"`}as is{`"`} without warranties of any kind. We do not guarantee
                        that the service will be available, error-free, or secure.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">6. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                        To the maximum extent permitted by law, we are not liable for any damages resulting
                        from your use of the website.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">7. Changes</h2>
                    <p className="text-muted-foreground">
                        We may update these Terms at any time. Continued use of the site means you accept
                        the updated Terms.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-medium">8. Contact</h2>
                    <p className="text-muted-foreground">
                        Email:{" "}
                        <a href="mailto:your-email@example.com" className="underline underline-offset-4">
                            adolfogante@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    )
}
