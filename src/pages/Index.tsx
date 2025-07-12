
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Github, FileText } from "lucide-react";

const Index = () => {
  const readmeContent = `
<div align="center">
  <h1>👋 Olá, eu sou um Engenheiro de Materiais!</h1>
  <h3>🔬 Graduando em Engenharia de Materiais | 📊 Analista de Dados | 🌱 Sustentabilidade</h3>
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2E8B57&center=true&vCenter=true&width=435&lines=Engenheiro+de+Materiais;Especialista+em+PCM;Analista+de+Dados;Lean+Six+Sigma+White+Belt;Sustentabilidade+%26+Efici%C3%AAncia" alt="Typing SVG" />
</div>

---

## 🚀 Sobre Mim

🎓 **Graduando em Engenharia de Materiais** pelo IFPA  
💼 **Especialista em PCM** (Planejamento e Controle de Manutenção)  
📊 **Analista de Dados** com foco em otimização de processos  
🌱 **Apaixonado por Sustentabilidade** e reaproveitamento de resíduos industriais  
🏆 **Certificado Lean Six Sigma White Belt**  

> *"Transformando dados em insights e resíduos em oportunidades"*

---

## 🛠️ Stack Tecnológica

### 💻 Ferramentas de Análise & Gestão
![SAP](https://img.shields.io/badge/SAP-0FAAFF?style=for-the-badge&logo=sap&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)
![Excel](https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white)
![Power BI](https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)

### 🔧 Especialidades Técnicas
- **PCM** - Planejamento e Controle de Manutenção
- **SAP-PM** - SAP Plant Maintenance
- **Oracle EDS** - Enterprise Data Solutions
- **Excel Avançado** - Modelagem e Análise de Dados
- **Power BI** - Business Intelligence e Dashboards
- **Lean Six Sigma** - Otimização de Processos

---

## 📈 Áreas de Expertise

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/dusk/64/000000/maintenance.png"/>
        <br><strong>PCM</strong>
        <br><sub>Planejamento & Controle</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/dusk/64/000000/warehouse.png"/>
        <br><strong>Gestão de Estoque</strong>
        <br><sub>Otimização & Controle</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/dusk/64/000000/audit.png"/>
        <br><strong>Auditoria</strong>
        <br><sub>Processos & Qualidade</sub>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/dusk/64/000000/recycle.png"/>
        <br><strong>Sustentabilidade</strong>
        <br><sub>Reaproveitamento</sub>
      </td>
    </tr>
  </table>
</div>

---

## 🎯 Projetos & Experiência

### 🏭 **Experiência Industrial**
- ✅ Atuação em **empresas públicas e privadas**
- ✅ Projetos de **reaproveitamento de resíduos industriais**
- ✅ Implementação de **melhorias contínuas**
- ✅ **Análise de falhas** e otimização de processos

### 📊 **Análise de Dados**
- 📈 Desenvolvimento de dashboards em **Power BI**
- 🔍 Análise de dados operacionais
- 📋 Relatórios gerenciais automatizados
- 🎯 KPIs de manutenção e eficiência

---

## 🌟 Certificações & Qualificações

<div align="center">
  <img src="https://img.shields.io/badge/Lean_Six_Sigma-White_Belt-green?style=for-the-badge&logo=sigma&logoColor=white"/>
  <img src="https://img.shields.io/badge/SAP-PM_Certified-blue?style=for-the-badge&logo=sap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Power_BI-Advanced-yellow?style=for-the-badge&logo=powerbi&logoColor=black"/>
</div>

---

## 📊 GitHub Stats

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=SEU_USERNAME&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USERNAME&layout=compact&langs_count=7&theme=algolia"/>
</div>

---

## 🎯 Foco Atual

\`\`\`
🔬 Finalizando graduação em Engenharia de Materiais
📊 Aprofundando conhecimentos em Data Science
🌱 Desenvolvendo projetos de sustentabilidade industrial
🚀 Buscando oportunidades em análise de dados e otimização de processos
\`\`\`

---

## 🤝 Vamos Conectar?

<div align="center">
  <a href="mailto:seu.email@exemplo.com">
    <img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
  <a href="https://linkedin.com/in/seu-perfil">
    <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/SEU_USERNAME">
    <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=SEU_USERNAME&color=green&style=flat-square&label=Profile+Views" alt="Profile views"/>
</div>

<div align="center">
  <h3>💡 "A inovação distingue um líder de um seguidor" - Steve Jobs</h3>
  <p>Sempre em busca de soluções sustentáveis e eficientes! 🌱⚡</p>
</div>
`;

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([readmeContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(readmeContent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Github className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              README.md para GitHub
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Seu perfil profissional para Engenharia de Materiais pronto para download
          </p>
        </div>

        {/* Actions Card */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Arquivo README.md</span>
            </CardTitle>
            <CardDescription>
              Clique no botão abaixo para fazer o download do arquivo README.md completo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Baixar README.md</span>
              </Button>
              
              <Button 
                onClick={handleCopyToClipboard}
                variant="outline" 
                size="lg"
                className="flex items-center space-x-2"
              >
                <FileText className="h-4 w-4" />
                <span>Copiar Conteúdo</span>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>📝 Instruções:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Substitua <code>SEU_USERNAME</code> pelo seu nome de usuário do GitHub</li>
                <li>Adicione seus links reais de email e LinkedIn</li>
                <li>Personalize as informações conforme necessário</li>
                <li>Adicione o arquivo na raiz do seu repositório GitHub</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Preview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Preview do Conteúdo</CardTitle>
            <CardDescription>
              Visualização do conteúdo markdown que será salvo no arquivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <pre className="text-xs overflow-x-auto whitespace-pre-wrap text-muted-foreground">
                {readmeContent.substring(0, 1000)}...
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
