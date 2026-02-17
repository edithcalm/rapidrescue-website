interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: Props) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-balance">{subtitle}</p>}
  </div>
);

export default SectionHeading;
