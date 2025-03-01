using BizVibe.Server.Configs;
using BizVibe.Server.Proxies.BrregProxy;
using BizVibe.Server.Services.BrregService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient<IBrregProxy, BrregProxy>();
builder.Services.AddSingleton<IBrregService, BrregService>();
builder.Services.AddSingleton<BrregEndpoints>();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddLogging(config =>
{
    config.AddConsole();
    config.AddDebug();
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
